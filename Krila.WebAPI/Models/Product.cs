using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Krila.WebAPI.Models.Common;

namespace Krila.WebAPI.Models
{
    using static DataConstants;

    public class Product
    {
        public Product()
        {
            this.AvailableSizes = new HashSet<Size>();
        }

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

        [Required]
        public Guid CategoryId { get; set; }

        public Category Category { get; set; }

        [Required] 
        public Guid GenderId { get; set; }

        public Gender Gender { get; set; }

        public HashSet<Size> AvailableSizes { get; set; }
    }
}
