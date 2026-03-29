# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/cars-shop/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Error messages (if applicable)
   - Your environment details (OS, Visual Studio version, .NET version)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **C#** for server-side logic
- **ASP.NET MVC** framework
- **AngularJS 1.6** for client-side functionality
- **JSON** for data storage

Before submitting:
- Ensure the project builds without errors in Visual Studio
- Test all functionality manually
- Verify all API endpoints work correctly
- Check that the UI displays properly in modern browsers

### Coding Standards

#### C# Backend
1. **Naming conventions**: Follow standard C# naming (PascalCase for classes/methods, camelCase for parameters)
2. **Error handling**: Use proper try-catch blocks and return meaningful HTTP status codes
3. **Comments**: Add XML documentation comments for public APIs
4. **Models**: Keep models in the `Models/` folder with clear property definitions
5. **Controllers**: API controllers should inherit from `ApiController`

#### JavaScript Frontend
1. **Module pattern**: Use IIFE (Immediately Invoked Function Expression) pattern
2. **Angular style**: Follow AngularJS best practices
3. **Naming**: Use camelCase for JavaScript variables and functions
4. **Services**: Keep API calls in services, not controllers
5. **Controllers**: Keep controllers lightweight, delegate logic to services

### Adding New Features

When adding new features:
1. Add appropriate models in `CarShop/Models/`
2. Create or update controllers in `CarShop/ApiControllers/` or `CarShop/Controllers/`
3. Add Angular components in `CarShop/App/`
4. Update JSON data files in `CarShop/App_Data/` if needed
5. Add views in `CarShop/Views/` as necessary
6. Test thoroughly

### Data Files

When modifying JSON data files:
- Maintain consistent formatting
- Validate JSON syntax
- Keep the structure aligned with existing models
- Ensure all required fields are present

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
