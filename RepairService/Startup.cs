using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using DAL;
using DAL.Interfaces;
using DAL.Repositories;
using DAL.Factories;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using BLL.Helpers;
using AutoMapper;
using BLL.Interfaces;
using BLL.Services;

namespace RepairService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                    {
                        options.RequireHttpsMetadata = false;
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = true,
                            ValidIssuer = AuthOptions.ISSUER,
                            ValidateLifetime = true,
                            IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                            ValidateIssuerSigningKey = true,
                        };
                    });


            string connection = Configuration.GetConnectionString("DefaultConnection");


            services.AddDbContext<RepositoryContext>(options => options.UseSqlServer(connection));
            services.AddScoped<IRepositoryContextFactory, RepositoryContextFactory>();
            services.AddScoped<IEmployerRepository>(provider => new EmployerRepository(connection, provider.GetService<IRepositoryContextFactory>()));
            services.AddScoped<IBuilderRepository>(provider => new BuilderRepository(connection, provider.GetService<IRepositoryContextFactory>()));
            services.AddScoped<IOrderRepository>(provider => new OrderRepository(connection, provider.GetService<IRepositoryContextFactory>()));
            services.AddScoped<IReviewRepository>(provider => new ReviewRepository(connection, provider.GetService<IRepositoryContextFactory>()));

            services.AddScoped<IHashPasswordService, HashPasswordService>();
            services.AddScoped<ISignUpService, SignUpService>();
            services.AddScoped<ISignInService, SignInService>();
            services.AddScoped<IOrderService, OrderService>();


            services.AddAutoMapper(typeof(Startup));
            services.AddControllersWithViews();

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
