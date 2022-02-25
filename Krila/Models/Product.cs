using System.ComponentModel.DataAnnotations;

namespace Krila.Models
{
    public class Product
    {
        public int Id { get; set; } 

        [Required]
        [MaxLength(200)]
        public string Name { get; set; }

        [Range(0.0, double.MaxValue)]
        public decimal Price { get; set; }

        [Required]
        [MaxLength(5000)]
        public string Description { get; set; }

        [Required]
        public Size Size { get; set; }

    }
}
