using System.Collections.Generic;

namespace CarShop.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public int Year { get; set; }
        public string DisplayPrice { get; set; }
        public List<Price> Prices { get; set; }

        public Car() { }
    }
}