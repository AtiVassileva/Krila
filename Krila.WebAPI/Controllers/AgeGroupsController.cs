using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Krila.WebAPI.Data;
using Krila.WebAPI.Models;

namespace Krila.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgeGroupsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AgeGroupsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/AgeGroups
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AgeGroup>>> GetAgeGroup()
        {
            return await _context.AgeGroup.ToListAsync();
        }

        // GET: api/AgeGroups/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AgeGroup>> GetAgeGroup(Guid id)
        {
            var ageGroup = await _context.AgeGroup.FindAsync(id);

            if (ageGroup == null)
            {
                return NotFound();
            }

            return ageGroup;
        }

        // PUT: api/AgeGroups/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAgeGroup(Guid id, AgeGroup ageGroup)
        {
            if (id != ageGroup.Id)
            {
                return BadRequest();
            }

            _context.Entry(ageGroup).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AgeGroupExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AgeGroups
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AgeGroup>> PostAgeGroup(AgeGroup ageGroup)
        {
            _context.AgeGroup.Add(ageGroup);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAgeGroup", new { id = ageGroup.Id }, ageGroup);
        }

        // DELETE: api/AgeGroups/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAgeGroup(Guid id)
        {
            var ageGroup = await _context.AgeGroup.FindAsync(id);
            if (ageGroup == null)
            {
                return NotFound();
            }

            _context.AgeGroup.Remove(ageGroup);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AgeGroupExists(Guid id)
        {
            return _context.AgeGroup.Any(e => e.Id == id);
        }
    }
}
