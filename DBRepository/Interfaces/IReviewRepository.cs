using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IReviewRepository
    {
        Task<List<Review>> GetReviews(int builderId,  int amount, int pageIndex);

        Task AddReview(Review review);

        Task<Review> GetReview(int reviewId);

        Task DeleteReview(int reviewId);

    }
}
