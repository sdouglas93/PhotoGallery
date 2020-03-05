using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ImageViewer.Models;
using ImageViewer.Repository;

namespace ImageViewer.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    public class ValuesController : ControllerBase
    {
        ImageRepository imageRepo = new ImageRepository();

        [HttpGet]
        [Route("api/Values/GetAllImages")]
        public IEnumerable<Image> GetAllImages()
        {
            return imageRepo.GetAllImages();
        }

        //[HttpGet("{id}")]
        [HttpGet]
        [Route("api/Values/GetFilteredImages/{width}/{height}")]
        public IEnumerable<Image> GetFilteredImages(int width,int height)
        {
            var allImages = GetAllImages();

            return allImages = allImages.Where(ai => ai.width == width && ai.height == height);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
