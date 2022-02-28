using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Krila.WebAPI.Models
{
    public class Order
    {
        public Order()
        {
            this.Products = new List<Product>();
        }

        [Key]
        [Required]
        public Guid Id { get; set; }

        public DateTime Date { get; set; }

        [Required]
        public Guid StatusId { get; set; }

        public OrderStatus Status { get; set; }

        public List<Product> Products { get; set; }
    }
}