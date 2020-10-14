using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using _1005CoreWebApi_TodoApi_2.Models;

namespace _1005CoreWebApi_TodoApi_2.Data
{
    public class TodoItemContext : DbContext
    {
        public TodoItemContext (DbContextOptions<TodoItemContext> options)
            : base(options)
        {
        }

        public DbSet<_1005CoreWebApi_TodoApi_2.Models.TodoItem> TodoItem { get; set; }
    }
}
