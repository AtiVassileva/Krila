using System;
using System.ComponentModel.DataAnnotations;
using Krila.WebAPI.Models.Common;

namespace Krila.WebAPI.Models
{
    using static DataConstants;

    public class Gender
    {
        [Key]
        [Required]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; }
    }
}
