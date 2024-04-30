using System.Threading;
using System.Reflection.Emit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;

namespace Application.Videos
{
    public class Create
    {
        public class Command : IRequest
        {
            public Video Video { get; set; }
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

                // adds the video in memory

                _context.Videos.Add(request.Video);

                await _context.SaveChangesAsync();

            }
        }
    }
}