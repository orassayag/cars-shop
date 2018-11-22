using CarShop.Helpers;
using CarShop.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarShop.Controllers
{
    public class CarShopController : ApiController
    {
        // Path: api/Carshop/GetCars
        [HttpGet]
        public HttpResponseMessage GetCars()
        {
            // Get all cars from cars.json into car list

            List<Car> cars = new List<Car>() { };
            using (StreamReader r = new StreamReader(@"C:\Or\Web\CarShop\CarShop\CarShop\App_Data\cars.json"))
            {
                string json = r.ReadToEnd();
                dynamic dynJson = JsonConvert.DeserializeObject(json);
                foreach (var item in dynJson)
                {
                    List<Price> prices = new List<Price>() { };

                    foreach (var itemPrice in item.Prices)
                    {
                        prices.Add(new Price
                        {
                            Id = itemPrice.Id,
                            Amount = itemPrice.Amount,
                            Currency = itemPrice.Name
                        });
                    }

                    Price selectedPrice = prices.SingleOrDefault(p => p.Currency == "USD");

                    cars.Add(new Car
                    {
                        Id = item.Id,
                        Name = item.Name,
                        Image = item.ImagePath,
                        Year = item.Year,
                        Prices = prices,
                        DisplayPrice = $"{ CurrencyCodeMapper.GetSymbol(selectedPrice.Currency) }{ selectedPrice.Amount }"
                    });
                }
            }

            if (cars == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            Response responseclass = new Response(true, "SUCCESS", cars);
            HttpResponseMessage response = Request.CreateResponse<Response>(HttpStatusCode.OK, responseclass);
            return response;
        }
    }
}