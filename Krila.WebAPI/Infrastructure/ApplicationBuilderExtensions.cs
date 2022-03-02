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

            SeedAgeGroups(serviceProvider);
            SeedGenders(serviceProvider);
            SeedCategories(serviceProvider);

            return app;
        }

        private static void MigrateDatabase(IServiceProvider serviceProvider)
        {
            var dbContext = serviceProvider
                .GetRequiredService<ApplicationDbContext>();

            dbContext.Database.Migrate();
        }

        private static void SeedAgeGroups(IServiceProvider serviceProvider)
        {
            var dbContext = serviceProvider
                .GetRequiredService<ApplicationDbContext>();

            if (dbContext.AgeGroup.Any())
            {
                return;
            }

            dbContext.AgeGroup.AddRange(new[]
            {
                new AgeGroup {Name = "Бебе"},
                new AgeGroup {Name = "Дете"},
                new AgeGroup {Name = "Възрастен"}
            });

            dbContext.SaveChanges();
        }

        private static void SeedGenders(IServiceProvider serviceProvider)
        {
            var dbContext = serviceProvider
                .GetRequiredService<ApplicationDbContext>();

            if (dbContext.Genders.Any())
            {
                return;
            }

            var adultGroupId = GetAgeGroupId(dbContext, "Възрастен");
            var kidGroupId = GetAgeGroupId(dbContext, "Дете");
            var babyGroupId = GetAgeGroupId(dbContext, "Бебе");

            dbContext.Genders.AddRange(new[]
            {
                new Gender  {Name = "Мъж", AgeGroupId = adultGroupId},
                new Gender  {Name = "Жена", AgeGroupId = adultGroupId},
                new Gender  {Name = "Мъж", AgeGroupId = kidGroupId},
                new Gender  {Name = "Жена", AgeGroupId = kidGroupId},
                new Gender  {Name = "Мъж", AgeGroupId = babyGroupId},
                new Gender  {Name = "Жена", AgeGroupId = babyGroupId},

            });

            dbContext.SaveChanges();
        }

        private static void SeedCategories(IServiceProvider serviceProvider)
        {
            var dbContext = serviceProvider
                .GetRequiredService<ApplicationDbContext>();

            //if (dbContext.Categories.Any())
            //{
            //    return;
            //}

            //SeedManCategories(dbContext);
            //SeedWomanCategories(dbContext);

            // SeedBoyCategories(dbContext);
            //SeedGirlCategories(dbContext);

            SeedBabyBoyCategories(dbContext);
            SeedBabyGirlCategories(dbContext);

            dbContext.SaveChanges();
        }

        private static void SeedManCategories(ApplicationDbContext dbContext)
        {
            var adultGroupId = dbContext.AgeGroup
                .Where(ag => ag.Name == "Възрастен")
                .Select(ag => ag.Id)
                .FirstOrDefault();

            var manGenderId = dbContext.Genders
                .Where(g => g.Name == "Мъж" &&
                            g.AgeGroupId == adultGroupId)
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
            var adultGroupId = dbContext.AgeGroup
                .Where(ag => ag.Name == "Възрастен")
                .Select(ag => ag.Id)
                .FirstOrDefault();

            var womanGenderId = dbContext.Genders
                .Where(g => g.Name == "Жена"
                            && g.AgeGroupId == adultGroupId)
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

        private static void SeedBoyCategories(ApplicationDbContext dbContext)
        {
            var kidGroupId = GetAgeGroupId(dbContext, "Дете");

            var boyGenderId = dbContext.Genders
                .Where(g => g.Name == "Мъж"
                            && g.AgeGroupId == kidGroupId)
                .Select(g => g.Id)
                .FirstOrDefault();

            dbContext.Categories.AddRange(new []
            {
                new Category {Name = "Тениски и ризи", GenderId = boyGenderId},
                new Category {Name = "Пуловери", GenderId = boyGenderId},
                new Category {Name = "Суитшърти", GenderId = boyGenderId},
                new Category {Name = "Панталони", GenderId = boyGenderId},
                new Category {Name = "Дънки", GenderId = boyGenderId},
                new Category {Name = "Къси панталони", GenderId = boyGenderId},
                new Category {Name = "Спално облекло", GenderId = boyGenderId},
                new Category {Name = "Бельо", GenderId = boyGenderId},
            });
        }

        private static void SeedGirlCategories(ApplicationDbContext dbContext)
        {
            var kidGroupId = GetAgeGroupId(dbContext, "Дете");

            var girlGenderId = dbContext.Genders
                .Where(g => g.Name == "Жена"
                            && g.AgeGroupId == kidGroupId)
                .Select(g => g.Id)
                .FirstOrDefault();

            dbContext.Categories.AddRange(new[]
            {
                new Category{Name = "Рокли", GenderId = girlGenderId},
                new Category{Name = "Топове и тениски", GenderId = girlGenderId},
                new Category{Name = "Пуловери", GenderId = girlGenderId},
                new Category{Name = "Суитшърти", GenderId = girlGenderId},
                new Category{Name = "Поли", GenderId = girlGenderId},
                new Category{Name = "Дънки", GenderId = girlGenderId},
                new Category{Name = "Панталони", GenderId = girlGenderId},
                new Category{Name = "Гащеризони", GenderId = girlGenderId},
                new Category{Name = "Спално облекло", GenderId = girlGenderId},
                new Category{Name = "Бельо", GenderId = girlGenderId}
            });
        }

        private static void SeedBabyBoyCategories(ApplicationDbContext dbContext)
        {
            var babyGroupId = GetAgeGroupId(dbContext, "Бебе");

            var babyBoyGenderId = dbContext.Genders
                .Where(g => g.Name == "Мъж"
                            && g.AgeGroupId == babyGroupId)
                .Select(g => g.Id)
                .FirstOrDefault();

            dbContext.Categories.AddRange(new []
            {
                new Category {Name = "Комплекти и облекла", GenderId = babyBoyGenderId},
                new Category {Name = "Тениски и потници", GenderId = babyBoyGenderId},
                new Category {Name = "Пуловери", GenderId = babyBoyGenderId},
                new Category {Name = "Панталони и дънки", GenderId = babyBoyGenderId},
                new Category {Name = "Бодита", GenderId = babyBoyGenderId},
                new Category {Name = "Гащеризони", GenderId = babyBoyGenderId},
                new Category {Name = "Къси панталони", GenderId = babyBoyGenderId},
                new Category {Name = "Спално облекло", GenderId = babyBoyGenderId},
                new Category {Name = "Бельо", GenderId = babyBoyGenderId},
                new Category {Name = "Празнични костюми", GenderId = babyBoyGenderId},
                new Category {Name = "Аксесоари", GenderId = babyBoyGenderId},
            });
        }

        private static void SeedBabyGirlCategories(ApplicationDbContext dbContext)
        {
            var babyGroupId = GetAgeGroupId(dbContext, "Бебе");

            var babyGirlGenderId = dbContext.Genders
                .Where(g => g.Name == "Жена"
                            && g.AgeGroupId == babyGroupId)
                .Select(g => g.Id)
                .FirstOrDefault();

            var babyGirlCategories = GetKidBabyCategories(babyGirlGenderId);

            dbContext.Categories.AddRange(new []
            {
                new Category {Name="Рокли", GenderId = babyGirlGenderId},
                new Category {Name="Комплекти и облекла", GenderId = babyGirlGenderId},
                new Category {Name="Топове и тениски", GenderId = babyGirlGenderId},
                new Category {Name="Пуловери и жилетки", GenderId = babyGirlGenderId},
                new Category {Name="Панталони и дънки", GenderId = babyGirlGenderId},
                new Category {Name="Бодита", GenderId = babyGirlGenderId},
                new Category {Name="Гащеризони", GenderId = babyGirlGenderId},
                new Category {Name="Къси панталони", GenderId = babyGirlGenderId},
                new Category {Name="Спално облекло", GenderId = babyGirlGenderId},
                new Category {Name="Празнични костюми", GenderId = babyGirlGenderId},
                new Category {Name="Аксесоари", GenderId = babyGirlGenderId},
            });
        }

        private static Guid GetAgeGroupId(ApplicationDbContext dbContext, string ageGroupName)
            => dbContext.AgeGroup
                .Where(ag => ag.Name == ageGroupName)
                .Select(ag => ag.Id)
                .FirstOrDefault();

        private static Category[] GetKidBabyCategories(Guid genderId) => new[]
        {
            new Category { GenderId = genderId, Name = "Дрехи" },
            new Category { GenderId = genderId, Name = "Връхни дрехи" },
            new Category { GenderId = genderId, Name = "Аксесоари" },
            new Category { GenderId = genderId, Name = "Празнични костюми" },
        };
    }
}
