// Whenever an HTTP request comes in, a new instance of the controller will be generated and the controller will handle the request.
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseAPIController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context = context;

        }

        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {

            return await _context.Activities.ToListAsync();

        }

        [HttpGet("{id}")] //api/activites/GUID - activity ID
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {

            return await _context.Activities.FindAsync(id);

        }

    }
}