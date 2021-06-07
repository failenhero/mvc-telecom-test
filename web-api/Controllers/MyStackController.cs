using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.DTOs;

namespace web_api.Controllers
{
    public class MyStackController : BaseController
    {
        [HttpGet]
        [Route("peek")]
        public string Peek()
        {
            return Program.NewStack.Peek();
        }

        [HttpGet]
        [Route("pop")]
        public string Pop()
        {
            return Program.NewStack.Pop();
        }

        [HttpPost]
        [Route("push")]
        public string Push(StackDto dto)
        {
            Program.NewStack.Push(dto.Text);

            return Program.NewStack.Peek();
        }
    }
}
