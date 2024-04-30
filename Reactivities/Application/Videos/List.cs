using Microsoft.EntityFrameworkCore;
using Domain;
using MediatR;
using Persistence;

namespace Application
{
    public class List_C
    {
        public class Query : IRequest<List<Video>> {}

        public class Handler : IRequestHandler<Query, List<Video>> 
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<List<Video>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Videos.ToListAsync();
            }
        }
    }
}