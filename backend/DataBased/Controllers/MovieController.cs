using DataBased.Controllers.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataBased.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDBContext context;

        public MovieController(MovieDBContext temp) {
            context = temp;
            }

        public IEnumerable<MyAPI> Get()
        {
            return context.Movies.ToArray()
                .Where(p => p.Edited == "Yes")
                .OrderBy(p => p.Title);
        }
    }
}
