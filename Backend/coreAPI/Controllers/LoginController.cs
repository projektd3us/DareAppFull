using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;

namespace coreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {

        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public LoginController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }



        //create a string MD5
        public static string GetMD5(string str)
        {
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] fromData = Encoding.UTF8.GetBytes(str);
            byte[] targetData = md5.ComputeHash(fromData);
            string byte2String = null;

            for (int i = 0; i < targetData.Length; i++)
            {
                byte2String += targetData[i].ToString("x2");

            }
            return byte2String;
        }

        public IActionResult Index()
        {
            return View();
        }

        [Route("verify")]
        [HttpPost]
        public JsonResult Post(String username, String password)
        {
            string query = @"
                    SELECT Users.Username, Users.Password
                    FROM Users
                    WHERE Users.Username = '" + username + @"' AND Users.Password = '" + password + @"'
                    ";
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
            if (table.Rows.Count == 0)
            {
                return new JsonResult("false");
            }
            return new JsonResult(username);


        }
        [Route("save")]
        [HttpPost]
        public JsonResult createAccount(String username, String password)
        {
            try
            {
                string query = @"
                    insert into Users values 
                    ('" + username.ToString() + @"', '" + password.ToString() + @"')
                    ";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("DareGameCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader); ;

                        myReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("true");
            }
            catch (Exception ex)
            {
                return new JsonResult("false");
            }




        }
    }


}

