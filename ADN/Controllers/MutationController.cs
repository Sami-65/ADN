using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ADN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MutationController : ControllerBase
    {

        // POST api/<MutationController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string[] adn)
        {
            try
            {
                for (int i = 0; i < adn.Length; i++)
                {
                    for(int j = 0; j < adn[i].Length; j++)
                    {
                        if (adn[i][j] == adn[i][j + 1] && adn[i][j] == adn[i][j + 2] && adn[i][j] == adn[i][j + 3])
                        { //horizontal (x)
                            return Ok();
                        }
                        if (i + 3 < adn.Length)
                            if (adn[i][j] == adn[i + 1][j] && adn[i][j] == adn[i + 2][j] && adn[i][j] == adn[i + 3][j])
                            { //vertical (x)
                                return Ok();
                            }
                        if (j + 3 < adn.Length && i + 3 < adn[i].Length)
                        {
                            if (adn[i][j] == adn[i + 1][j + 1] && adn[i][j] == adn[i + 2][j + 2] && adn[i][j] == adn[i + 3][j + 3])
                            { //diagonal (x,y)
                                return Ok();
                            }
                        }
                        if (j >= 3 && i + 3 < adn.Length)
                        {
                            if (adn[i][j] == adn[i + 1][j - 1] && adn[i][j] == adn[i + 2][j - 2] && adn[i][j] == adn[i + 3][j - 3])
                            { //diagonal (x,-y)
                                return Ok();
                            }
                        }
                    }
                }
                    return Forbid();

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
