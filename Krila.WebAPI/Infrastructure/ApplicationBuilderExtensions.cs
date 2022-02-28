using System;
using System.Linq;

using Krila.WebAPI.Data;
using Krila.WebAPI.Models;

using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Krila.WebAPI.Infrastructure
{
    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder PrepareDatabase(this IApplicationBuilder app)
        {
            using var scopedServices = app.ApplicationServices.CreateScope();

            var serviceProvider = scopedServices.ServiceProvider;

            MigrateDatabase(serviceProvider);

            SeedGenders(serviceProvider);

            return app;
        }

        private static void MigrateDatabase(IServiceProvider serviceProvider)
        {
            var dbContext = serviceProvider
                .GetRequiredService<ApplicationDbContext>();

            dbContext.Database.Migrate();
        }

        private static void SeedGenders(IServiceProvider serviceProvider)
        {
            var dbContext = serviceProvider
                .GetRequiredService<ApplicationDbContext>();

            if (dbContext.Genders.Any())
            {
                return;
            }

            dbContext.Genders.AddRange(new[]
            {
                new Gender  {Name = "Мъж"},
                new Gender  {Name = "Жена"},
                new Gender  {Name = "Момче"},
                new Gender  {Name = "Момиче"},
                new Gender  {Name = "Бебе момче"},
                new Gender  {Name = "Бебе момиче"},
            });

            dbContext.SaveChanges();
        }

        private static void SeedCategories(IServiceProvider serviceProvider)
        {
            var dbContext = serviceProvider
                .GetRequiredService<ApplicationDbContext>();

            if (dbContext.Categories.Any())
            {
                return;
            }

            SeedManCategories(dbContext);
            SeedWomanCategories(dbContext);

            dbContext.SaveChanges();
        }

        private static void SeedManCategories(ApplicationDbContext dbContext)
        {
            var manGenderId = dbContext.Genders
                .Where(g => g.Name == "Мъж")
                .Select(g => g.Id)
                .FirstOrDefault();

            dbContext.Categories.AddRange(new[]
            {
                new Category{GenderId = manGenderId, Name = "Якета и палта"},
                new Category{GenderId = manGenderId, Name = "Панталони"},
                new Category{GenderId = manGenderId, Name = "Пуловери"},
                new Category{GenderId = manGenderId, Name = "Ризи"},
                new Category{GenderId = manGenderId, Name = "Суитшърти"},
                new Category{GenderId = manGenderId, Name = "Тениски и потници"},
                new Category{GenderId = manGenderId, Name = "Дънки"},
                new Category{GenderId = manGenderId, Name = "Къси панталони"},
                new Category{GenderId = manGenderId, Name = "Спортни облекла"},
                new Category{GenderId = manGenderId, Name = "Аксесоари"},
                new Category{GenderId = manGenderId, Name = "Бельо"},
                new Category{GenderId = manGenderId, Name = "Домашни дрехи"},
            });
        }

        private static void SeedWomanCategories(ApplicationDbContext dbContext)
        {
            var womanGenderId = dbContext.Genders
                .Where(g => g.Name == "Жена")
                .Select(g => g.Id)
                .FirstOrDefault();

            dbContext.Categories.AddRange(new[]
            {
                new Category{GenderId = womanGenderId, Name = "Рокли"},
                new Category{GenderId = womanGenderId, Name = "Тениски и потници"},
                new Category{GenderId = womanGenderId, Name = "Ризи и блузи"},
                new Category{GenderId = womanGenderId, Name = "Суитшърти"},
                new Category{GenderId = womanGenderId, Name = "Пуловери"},
                new Category{GenderId = womanGenderId, Name = "Якета и палта"},
                new Category{GenderId = womanGenderId, Name = "Панталони и клинове"},
                new Category{GenderId = womanGenderId, Name = "Дънки"},
                new Category{GenderId = womanGenderId, Name = "Гащеризони"},
                new Category{GenderId = womanGenderId, Name = "Поли"},
                new Category{GenderId = womanGenderId, Name = "Аксесоари"},
                new Category{GenderId = womanGenderId, Name = "Къси панталони"},
                new Category{GenderId = womanGenderId, Name = "Бельо"},
                new Category{GenderId = womanGenderId, Name = "Домашни дрехи"},
                new Category{GenderId = womanGenderId, Name = "Спортни облекла"},
                new Category{GenderId = womanGenderId, Name = "Дрехи за бременни"},
            });
        }
    }
}
