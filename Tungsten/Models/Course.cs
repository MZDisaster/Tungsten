﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tungsten.Models
{
    public class Course : Entity<string>
    {
        public Course()
        {
            Id = Guid.NewGuid().ToString();
        }
        [Key]
        public string Id { get; set; }
        public string Description { get; set; }

        [Required, ForeignKey("Group")]
        public string GroupId { get; set; }
        public Group Group { get; set; }

        public virtual ICollection<Segment> Segments { get; set; }
        public virtual ICollection<ApplicationUser> Participants { get; set; }
        public virtual ICollection<Lesson> Lessons { get; set; }
        public string Subject { get; set; }
        public string Level { get; set; }
    }
}