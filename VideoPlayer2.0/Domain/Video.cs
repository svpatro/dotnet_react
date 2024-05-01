namespace Domain
{
    public class Video
    {

        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Visibility {get; set; } 
        public string Rating {get; set; }     
        public string Tags {get; set; } 
        public string filePath {get; set;}
    }
}