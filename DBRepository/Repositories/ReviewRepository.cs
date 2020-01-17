using DAL.Entities;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        public Task AddReview(Review review)
        {
            throw new NotImplementedException();
        }

        public Task DeleteReview(int reviewId)
        {
            throw new NotImplementedException();
        }

        public Task<Review> GetReview(int reviewId)
        {
            throw new NotImplementedException();
        }

        public Task<List<Review>> GetReviews(int builderId, int amount, int pageIndex)
        {
            throw new NotImplementedException();
        }
    }
}
