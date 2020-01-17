using System;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class RepositoryContext : DbContext
    {
        public DbSet<Builder> Builders { get; set; }

        public DbSet<Employer> Employers { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Review> Reviews { get; set; }

        public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

    }
}