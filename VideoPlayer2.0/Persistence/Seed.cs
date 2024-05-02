using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Videos.Any()) return;
            
            var videos = new List<Video>
            {
                new Video
                {
                    Title = "Video 1",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "First Video",
                    Category = "Animals",
                    Visibility = "Public",
                    Rating = "4.6",
                    Tags = "Tag1",
                    filePath = "/videos/sample.mp4"

                },
                new Video
                {
                    Title = "Video 2",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Second Video",
                    Category = "Animals",
                    Visibility = "Public",
                    Rating = "4.5",
                    Tags = "Tag2",
                },
                new Video
                {
                    Title = "Video 3",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Third Video",
                    Category = "Animals",
                    Visibility = "Public",
                    Rating = "4.5",
                    Tags = "Tag3",
                },
                new Video
                {
                    Title = "Video 4",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Fourth Video",
                    Category = "Animals",
                    Visibility = "Public",
                    Rating = "4.5",
                    Tags = "Tag4",
                },
                new Video
                {
                    Title = "Video 5",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Fifth Video",
                    Category = "Animals",
                    Visibility = "Public",
                    Rating = "4.5",
                    Tags = "Tag5",
                },
                new Video
                {
                    Title = "Video 6",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Sixth Video",
                    Category = "Animals",
                    Visibility = "Public",
                    Rating = "4.5",
                    Tags = "Tag6",
                }
            };

            await context.Videos.AddRangeAsync(videos);
            await context.SaveChangesAsync();
        }
    }
}