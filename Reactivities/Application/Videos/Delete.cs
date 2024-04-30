using Application.Core;
using AutoMapper;
using MediatR;
using Domain;
using Persistence;

namespace Application.Videos
{
    public class Delete
    {
        public class Command : IRequest
        {

            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {

            private readonly DataContext _context;
            public Handler(DataContext context)
            {

                _context = context;

            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {

                var video = await _context.Videos.FindAsync(request.Id); 

                // Removes video from memory

                _context.Remove(video);

                await _context.SaveChangesAsync();
                            
            }

        }
    }
}