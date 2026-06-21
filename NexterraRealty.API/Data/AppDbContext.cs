using Microsoft.EntityFrameworkCore;
using NexterraRealty.API.Models;

namespace NexterraRealty.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Property> Properties => Set<Property>();
}