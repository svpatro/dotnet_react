using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Videos;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {

        public MappingProfiles()
        {

            // Mapping from local instance
            CreateMap<Video, Video>();

        }
        
    }
}