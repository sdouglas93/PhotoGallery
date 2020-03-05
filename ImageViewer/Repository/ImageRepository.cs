using System;
using System.Collections.Generic;
using System.IO;
using ImageViewer.Models;

namespace ImageViewer.Repository
{
    public class ImageRepository
    {

        public IEnumerable<Image> GetAllImages()
        {
            string line;
            //int counter = 0;

            List<Image> imageList = new List<Image>();

            FileStream fileStream = new FileStream("docs/PasteBin.txt", FileMode.Open);
            using (StreamReader reader = new StreamReader(fileStream))
            {
                while ((line = reader.ReadLine()) != null)
                {
                    Uri uriUrl = new Uri(line);
                    Image images = new Image();

                    images.url = line;
                    images.ID = Int32.Parse(uriUrl.Segments[2].TrimEnd('/'));
                    images.width = Int32.Parse(uriUrl.Segments[3].TrimEnd('/'));
                    images.height = Int32.Parse(uriUrl.Segments[4].TrimEnd('/'));

                   
                    imageList.Add(images);
                }
            }




            /*System.IO.StreamReader file = new System.IO.StreamReader(@"~/docs/PasteBin.txt");
            while ((line = file.ReadLine()) != null)
            {
                //System.Console.WriteLine(line);
                counter++;

                Image imageUrl = new Image();

                imageUrl.url = line;
                imageList.Add(imageUrl);
            }
            file.Close();*/

            return imageList;
        }

    }
}
