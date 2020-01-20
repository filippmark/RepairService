using DAL.Entities;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class ReviewRepository : BaseRepository , IReviewRepository
    {
        public ReviewRepository(string connectionString, IRepositoryContextFactory context) : base(connectionString, context)
        {
        }

        public async Task AddReview(Review review)
        {
            using(var context = Context.CreateDbContext(ConnectionString))
            {
                context.Reviews.Add(review);
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteReview(int reviewId)
        {
            using(var context = Context.CreateDbContext(ConnectionString))
            {
                var review = new Review() { Id = reviewId };
                context.Reviews.Remove(review);
                await context.SaveChangesAsync();
            }
        }

        public async Task<Review> GetReview(int reviewId)
        {
            using (var context = Context.CreateDbContext(ConnectionString))
            {
                return await context.Reviews.FirstOrDefaultAsync(p => p.Id == reviewId);
            }
        }

        public async Task<List<Review>> GetReviews(int builderId, int pageSize, int pageIndex)
        {
            
            using (var context =  Context.CreateDbContext(ConnectionString))
            {
                var reviews = context.Reviews.AsQueryable();

                reviews = reviews.Where(p => p.BuilderId == builderId);

                return await reviews.OrderByDescending(p => p.CreatedAt).Skip(pageSize * pageIndex).Take(pageSize).ToListAsync();

            }
        }
    }
}
