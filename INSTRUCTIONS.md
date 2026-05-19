# Instructions

## Setup and Usage Instructions

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Available Commands](#available-commands)
4. [Best Practices](#best-practices)
5. [Troubleshooting](#troubleshooting)
6. [Documentation](#documentation)
7. [Extending the Application](#extending-the-application)
8. [External Resources](#external-resources)
9. [Version](#version)
10. [Last Updated](#last-updated)

## Prerequisites

### System Requirements

- **Operating System**: Windows 7 or higher
- **IDE**: Visual Studio 2015, 2017, 2019, or 2022
- **Framework**: .NET Framework 4.5 or higher
- **Web Server**: IIS Express (included with Visual Studio)
- **Browser**: Modern web browser (Chrome, Firefox, Edge)

### Knowledge Prerequisites

- Basic understanding of C# and .NET Framework
- Familiarity with ASP.NET MVC architecture
- Basic knowledge of AngularJS 1.x and JavaScript
- Understanding of JSON data structures

## Initial Setup

### 1. Install Dependencies

The project uses NuGet for dependency management. To install all required packages:

1. Open the solution file `CarShop.sln` in Visual Studio.
2. Right-click on the **Solution** in Solution Explorer.
3. Select **Restore NuGet Packages**.
4. Visual Studio will download and install all necessary libraries (ASP.NET MVC, Web API, Newtonsoft.Json, etc.).

### 2. Configure Data Path

Before running the application, you must configure the physical path to the JSON data files:

1. Navigate to `CarShop/ApiControllers/CarShopController.cs`.
2. Locate line 24 (inside the `GetCars` method).
3. Update the `StreamReader` path to point to your local `App_Data\cars.json` file.

## Setup Instructions

1. Open the project in Visual Studio 2015 or higher
2. Restore NuGet packages (Visual Studio should do this automatically)
3. Update the hardcoded file path in `ApiControllers/CarShopController.cs` line 24:
   ```csharp
   // Change this path to match your local setup
   using (StreamReader r = new StreamReader(@"C:\Or\Web\CarShop\CarShop\CarShop\App_Data\cars.json"))
   ```
   Update it to use a relative path or your actual project location.
4. Build the solution (Build → Build Solution or Ctrl+Shift+B)
5. Run the project (F5 or Debug → Start Debugging)

## Configuration

### Application Settings

The main configuration is in the Web.config file located in the CarShop directory.

### Data Files

All data is stored in JSON files in the `CarShop/App_Data/` directory:

- **cars.json** - Contains car inventory with pricing in multiple currencies
- **currencies.json** - Currency definitions and exchange rates
- **orders.json** - Order history (if implemented)

#### Cars Data Structure

Each car entry includes:

- `Id`: Unique identifier
- `Name`: Car model name
- `Year`: Manufacturing year
- `ImagePath`: Path to car image (relative to Content folder)
- `Prices`: Array of prices in different currencies (USD, EUR, NIS)

#### Adding New Cars

To add a new car to the inventory:

1. Add car image to `CarShop/Content/Images/`
2. Add car entry to `cars.json` following the existing format
3. Include prices for all supported currencies (USD, EUR, NIS)

### Currency Configuration

Currencies are defined in `currencies.json`. To add a new currency:

1. Add the currency definition to `currencies.json`
2. Update the `CurrencyCodeMapper` helper class in `Helpers/CurrencyCodeMapper.cs`
3. Add prices in the new currency to all cars in `cars.json`

## Running the Application

### Development Mode

1. Press F5 in Visual Studio to run in debug mode
2. The application will open in your default browser at `http://localhost:12172/`
3. The home page displays all available cars with their prices

### API Endpoints

The application exposes the following API endpoints:

#### Get All Cars

```
GET /api/CarShop/GetCars
```

Returns a list of all cars with their details and prices.

**Response format:**

```json
{
  "ResponseStatus": true,
  "ResponseMessage": "SUCCESS",
  "ResponseData": [
    {
      "Id": 1,
      "Name": "Infiniti Q70L",
      "Image": "Images\\2015_Infiniti_Q70L_002_8274.jpg",
      "Year": 2015,
      "DisplayPrice": "$19850.00",
      "Prices": [
        {
          "Id": 1,
          "Amount": 19850.0,
          "Currency": "USD"
        }
      ]
    }
  ]
}
```

## Project Structure

```
CarShop/
├── App/                    # AngularJS application
│   ├── car-shop/          # Car shop module
│   │   ├── car-shop.controller.js
│   │   ├── car-shop.module.js
│   │   └── car-shop.service.js
│   └── modal/             # Modal directive
│       ├── modal-show.directive.html
│       └── modal-show.directive.js
├── App_Data/              # JSON data files
│   ├── cars.json
│   ├── currencies.json
│   └── orders.json
├── App_Start/             # Application configuration
│   ├── BundleConfig.cs
│   ├── FilterConfig.cs
│   ├── RouteConfig.cs
│   └── WebApiConfig.cs
├── ApiControllers/        # Web API controllers
│   └── CarShopController.cs
├── Controllers/           # MVC controllers
│   └── HomeController.cs
├── Content/               # Static assets (CSS, images)
│   ├── Images/           # Car images
│   └── *.css
├── Helpers/               # Helper classes
│   ├── CurrencyCodeMapper.cs
│   └── Response.cs
├── Models/                # Data models
│   ├── Car.cs
│   ├── Currency.cs
│   └── Price.cs
├── Scripts/               # JavaScript libraries
├── Views/                 # MVC views
│   ├── Home/
│   │   └── Index.cshtml
│   └── Shared/
│       ├── _Layout.cshtml
│       └── Error.cshtml
└── Web.config             # Application configuration
```

## Features

### Current Features

- Display car inventory with images
- Show prices in multiple currencies (USD, EUR, NIS)
- Currency symbol mapping
- Modal dialogs for car orders
- Responsive Bootstrap-based UI

### Frontend (AngularJS)

- **car-shop.module.js** - Main Angular module definition
- **car-shop.controller.js** - Controller for managing car display and user interactions
- **car-shop.service.js** - Service for API communication
- **modal-show.directive.js** - Custom directive for modal dialogs

### Backend (ASP.NET)

- **CarShopController.cs** - Web API controller for car data
- **HomeController.cs** - MVC controller for page routing
- **Models/** - Data models (Car, Price, Currency)
- **Helpers/** - Utility classes (currency mapping, response wrapper)

## Troubleshooting

### Common Issues

#### 404 Error on API Calls

- Check that Web API routing is configured in `App_Start/WebApiConfig.cs`
- Verify the API endpoint URL matches the route configuration

#### Cars Not Loading

- Verify the file path in `CarShopController.cs` is correct
- Check that `cars.json` exists and has valid JSON syntax
- Look at browser console for JavaScript errors

#### Images Not Displaying

- Verify image paths in `cars.json` are correct
- Check that images exist in `Content/Images/`
- Ensure image file names match exactly (case-sensitive on some systems)

#### Build Errors

- Clean solution (Build → Clean Solution)
- Restore NuGet packages (right-click solution → Restore NuGet Packages)
- Rebuild solution (Build → Rebuild Solution)

## Development

### Adding New API Endpoints

1. Add method to `CarShopController.cs`
2. Decorate with `[HttpGet]` or `[HttpPost]` attribute
3. Update Angular service to call new endpoint
4. Update controller to use the service

### Modifying the UI

1. Edit views in `Views/Home/Index.cshtml`
2. Update Angular templates if needed
3. Modify CSS in `Content/site.css` or `Content/site.less`
4. Update Angular controllers and services as needed

## Available Commands

### Development Commands

- **Build Solution**: `Ctrl+Shift+B` - Compiles C# code and processes LESS files.
- **Start Debugging**: `F5` - Launches the application with the Visual Studio debugger.
- **Start Without Debugging**: `Ctrl+F5` - Launches the application quickly.
- **Clean Solution**: Removes all compiled artifacts.
- **Rebuild Solution**: Performs a clean followed by a build.

### Running Scripts

While this project is primarily GUI-based via Visual Studio, you can use the following:

- **NuGet Restore**: `Update-Package` in Package Manager Console.
- **Custom Scripts**: Any `.js` scripts in the `Scripts/` folder can be run using a local Node.js environment if needed for automation.

## Best Practices

- **Code Organization**: Keep controllers thin and move business logic to services or helper classes.
- **Async Programming**: Use asynchronous API calls in AngularJS to prevent UI blocking.
- **Data Validation**: Always validate data on both client-side (Angular) and server-side (C#).
- **Styling**: Use LESS variables for colors and spacing to maintain visual consistency.
- **Error Handling**: Use the standard `Response<T>` wrapper for all API outputs.

## Documentation

- **README.md**: Overview of the project, features, and technology stack.
- **INSTRUCTIONS.md**: Detailed setup, configuration, and usage guide (this file).
- **API Documentation**: Detailed in the `README.md` under the API section.

## Extending the Application

### Adding New Functionality

1. **Models**: Create new C# classes in the `Models/` folder.
2. **API**: Add new endpoints in `CarShopController.cs`.
3. **Angular Service**: Add corresponding methods in `car-shop.service.js`.
4. **Angular Controller**: Update `car-shop.controller.js` to handle new data/actions.
5. **Views**: Update `Index.cshtml` or create new partial views.

## External Resources

- [ASP.NET MVC Documentation](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started)
- [AngularJS 1.6 Developer Guide](https://docs.angularjs.org/guide)
- [Bootstrap 3 CSS Reference](https://getbootstrap.com/docs/3.3/css/)
- [Newtonsoft.Json Documentation](https://www.newtonsoft.com/json/help/html/Introduction.htm)

## Version

**Current Version**: 1.0.0

## Last Updated

**Date**: 2026-05-18

## Notes

- The application uses hardcoded file paths that need to be updated for local development
- JSON data files serve as the database (no SQL database required)
- The application requires IIS Express or IIS to run
- Images should be optimized for web display
- Browser compatibility: Tested with modern browsers (Chrome, Firefox, Edge)

## Author

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag
