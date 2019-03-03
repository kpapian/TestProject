﻿using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using TestProject.IServices;
using TestProject.Models;
using TestProject.Utils;

namespace TestProject.Services
{
    public class CoachesService: ICoachesService
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IConverterService _converterService;

        /// <summary>
        ///     Initializes a new instance of the <see cref="CoachesService" /> class.
        /// </summary>
        /// <param name="hostingEnvironment">The hosting environment.</param>
        public CoachesService(IHostingEnvironment hostingEnvironment, IConverterService converterService)
        {
            _hostingEnvironment = hostingEnvironment;
            _converterService = converterService;
        }

        public Task<IEnumerable<Coach>> GetCoachesInformation()
        {
            string path = Path.Combine(_hostingEnvironment.ContentRootPath, PathConstants.CoachesJsonPath);
            return _converterService.Deserialize<IEnumerable<Coach>>(path); 
        }
    }
}
