// Whenever an HTTP request comes in, a new instance of the controller will be generated and the controller will handle the request.
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Persistence;

namespace API.Controllers
{
    public class VideosController : BaseAPIController
    {
        private readonly DataContext _context;
        public VideosController(DataContext context)
        {
            _context = context;

        }

        [HttpGet] //api/videos
        public async Task<ActionResult<List<Video>>> GetVideos()
        {

            return await _context.Videos.ToListAsync();

        }

        [HttpGet("{id}")] //api/videos/GUID - activity ID
        public async Task<ActionResult<Video>> GetVideo(Guid id)
        {

            return await _context.Videos.FindAsync(id);

        }

    }
}