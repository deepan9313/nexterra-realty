
using Microsoft.AspNetCore.Mvc;
using NexterraRealty.API.Data;
using NexterraRealty.API.Models;

namespace NexterraRealty.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PropertiesController : ControllerBase
{
    private readonly AppDbContext _context;

    public PropertiesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetProperties()
    {
        return Ok(_context.Properties.ToList());
    }

    [HttpGet("stats")]
    public IActionResult GetStats()
    {
        var total = _context.Properties.Count();

        var pending = _context.Properties
            .Count(p => p.Status == "Pending");

        var approved = _context.Properties
            .Count(p => p.Status == "Approved");

        var rejected = _context.Properties
            .Count(p => p.Status == "Rejected");

        return Ok(new
        {
            total,
            pending,
            approved,
            rejected
        });
    }

    [HttpGet("seed")]
    public IActionResult Seed()
    {
        var property = new Property
        {
            Title = "Luxury Villa",
            Description = "Premium Villa in RS Puram",
            Price = 12500000,
            Location = "RS Puram, Coimbatore",
            Bedrooms = 4,
            Bathrooms = 4,
            Area = 3200,
            PropertyType = "Villa",
            Status = "Pending"
        };

        _context.Properties.Add(property);
        _context.SaveChanges();

        return Ok(property);
    }

    [HttpGet("{id}")]
    public IActionResult GetProperty(int id)
    {
        var property = _context.Properties.Find(id);

        if (property == null)
            return NotFound();

        return Ok(property);
    }

    [HttpPost]
    public IActionResult AddProperty(Property property)
    {
        _context.Properties.Add(property);
        _context.SaveChanges();

        return Ok(property);
    }

    [HttpPut("approve/{id}")]
    public IActionResult ApproveProperty(int id)
    {
        var property = _context.Properties.Find(id);

        if (property == null)
            return NotFound();

        property.Status = "Approved";

        _context.SaveChanges();

        return Ok(property);
    }

    [HttpPut("reject/{id}")]
    public IActionResult RejectProperty(int id)
    {
        var property = _context.Properties.Find(id);

        if (property == null)
            return NotFound();

        property.Status = "Rejected";

        _context.SaveChanges();

        return Ok(property);
    }
}

