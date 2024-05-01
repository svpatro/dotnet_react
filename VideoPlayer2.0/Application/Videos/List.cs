using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Domain;
using MediatR;
using Persistence;
using Microsoft.Extensions.Logging;

namespace Application.Videos
{
    public class List_C
    {
        public class Query : IRequest<List<Video>> {}

        public class Handler : IRequestHandler<Query, List<Video>> 
        {
            private readonly DataContext _context;
            private readonly ILogger<List_C> _logger;
            public Handler(DataContext context, ILogger<List_C> logger)
            {
                _logger = logger;
                _context = context;

            }

            public async Task<List<Video>> Handle(Query request, CancellationToken cancellationToken)
            {
                try{
                    for (var i = 0; i < 10; i++)
                    {
                        cancellationToken.ThrowIfCancellationRequested();
                        await Task.Delay(80, cancellationToken);
                        _logger.LogInformation($"Task {i} has completed");
                    }
                }
                catch (System.Exception)
                {
                    _logger.LogInformation("Task was cancelled");
                }

                return await _context.Videos.ToListAsync();
            }
        }
    }
}