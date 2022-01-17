using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using coreAPI.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Globalization;

namespace coreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserActionsController : Controller
    {

        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public UserActionsController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        [Route("next")]
        public JsonResult getNext(String dareTypeName, String username)
        {

            dareTypeName = dareTypeName.Replace("_", " ");
            dareTypeName = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(dareTypeName);
            string query = @"
                    SELECT Dare.DareId, Dare.DareText, Dare.DareTypeId, DareType.DareTypeName
                    FROM Dare
                    JOIN DareType ON Dare.DareTypeId = DareType.DareTypeId
                    WHERE DareType.DareTypeName = '" + dareTypeName + @"'";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DareGameCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); 

                    myReader.Close();
                    myCon.Close();
                }
            }
            DataRow row = table.Rows[0];
            DataRow row2 = table.Rows[table.Rows.Count-1];
            int startNum = Convert.ToInt32(row["DareId"]);
            int endNum = Convert.ToInt32(row2["DareId"]) + 1;
            Random ram = new Random();
            int i = ram.Next(startNum, endNum);

            string query2 = @" SELECT Dare.DareId, Dare.DareText, Dare.DareTypeId
                              FROM Dare
                              WHERE Dare.DareId = " + i;

            DataTable table2 = new DataTable();
            string sqlDataSource2 = _configuration.GetConnectionString("DareGameCon");
            SqlDataReader myReader2;
            using (SqlConnection myCon2 = new SqlConnection(sqlDataSource2))
            {
                myCon2.Open();
                using (SqlCommand myCommand2 = new SqlCommand(query2, myCon2))
                {
                    myReader2 = myCommand2.ExecuteReader();
                    table2.Load(myReader2);

                    myReader2.Close();
                    myCon2.Close();
                }
            }

            string query3 = @"UPDATE Users
                            SET Users.DaresDone = Users.DaresDone + 1
                            WHERE Users.Username ='" + username.ToString() + @"'";

            DataTable table3 = new DataTable();
            string sqlDataSource3 = _configuration.GetConnectionString("DareGameCon");
            SqlDataReader myReader3;
            using (SqlConnection myCon3 = new SqlConnection(sqlDataSource3))
            {
                myCon3.Open();
                using (SqlCommand myCommand3 = new SqlCommand(query3, myCon3))
                {
                    myReader3 = myCommand3.ExecuteReader();
                    table3.Load(myReader2);

                    myReader3.Close();
                    myCon3.Close();
                }
            }




            return new JsonResult(table2);
        }

        [HttpGet]
        [Route("userdetails")]
        public JsonResult getUserDetails(String username)
        {
            string query = @"SELECT Users.Username, Users.DaresDone, Users.GamesPlayed
                             FROM Users
                             WHERE Users.Username ='" + username.ToString() + @"'";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DareGameCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet]
        [Route("gamesplayed")]
        public JsonResult updateGamesPlayed(string username)
        {
            string query = @"UPDATE Users
                            SET Users.GamesPlayed = Users.GamesPlayed + 1, Users.DaresDone = Users.DaresDone + 1
                            WHERE Users.Username = '" + username.ToString() + @"'";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DareGameCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        public IActionResult Index()    
        {
            return View();
        }   
    }
}
