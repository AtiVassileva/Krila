using System;
using Krila.WebAPI.Data;
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

            SeedBabyGirlCategories(serviceProvider);

            return app;
        }

        private static void MigrateDatabase(IServiceProvider serviceProvider)
        {
            var dbContext = serviceProvider
                .GetRequiredService<ApplicationDbContext>();

            dbContext.Database.Migrate();
        }

        private static void SeedBabyGirlCategories(IServiceProvider serviceProvider)
        {
            var dbContext = serviceProvider
                .GetRequiredService<ApplicationDbContext>();

        }
    }
}
