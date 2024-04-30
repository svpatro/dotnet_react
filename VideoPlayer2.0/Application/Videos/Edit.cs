using Application.Core;
using AutoMapper;
using MediatR;
using Domain;
using Persistence;

namespace Application.Videos
{
    public class Edit
    {

        public class Command : IRequest
        {
            public Video Video { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var video = await _context.Videos.FindAsync(request.Video.Id);

                // take all properties of local video and assign it to video instance

                _mapper.Map(request.Video, video);

                // save changes to database

                await _context.SaveChangesAsync();
            }
        }
    }
}