using System;
using System.ComponentModel.DataAnnotations;
using Krila.WebAPI.Models.Common;

namespace Krila.WebAPI.Models
{
    using static DataConstants;

    public class Product
    {
        [Key]
        [Required]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; }

        [Required]
        [MaxLength(DescriptionMaxLength)]
        public string Description { get; set; }

        [Range(MinPrice, double.MaxValue)]
        public decimal Price { get; set; }
    }
}
