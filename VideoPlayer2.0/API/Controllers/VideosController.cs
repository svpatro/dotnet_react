using System.Reflection.Metadata.Ecma335;
using System.Runtime.InteropServices;
using System.Net.Mime;
// Whenever an HTTP request comes in, a new instance of the controller will be generated and the controller will handle the request.
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Application;
using Application.Videos;
using Persistence;

namespace API.Controllers
{
    public class VideosController : BaseAPIController
    {
        [HttpGet] //api/videos
        public async Task<ActionResult<List<Video>>> GetVideos(CancellationToken ct)
        {

            return await Mediator.Send(new List_C.Query(), ct);

        }

        [HttpGet("{id}")] //api/videos/GUID - activity ID
        public async Task<ActionResult<Video>> GetVideo(Guid id)
        {

            return await Mediator.Send(new Details.Query{Id = id});

        }

        [HttpPost]
        public async Task<IActionResult> CreateVideo(Video video)
        {

            await Mediator.Send(new Create.Command {Video = video});
            return Ok();

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditVideo(Guid id, Video video)
        {
            video.Id = id;
            await Mediator.Send(new Edit.Command {Video = video });
            return Ok();
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteVideo(Guid id)
        {

            await Mediator.Send(new Delete.Command {Id = id});
            return Ok();

        }

    }
}