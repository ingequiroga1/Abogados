using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Windows.Forms;

namespace KpisCuanti.App.clases
{
    public partial class conexion : System.Web.UI.Page
    {
        [System.Web.Services.WebMethod]
        public static Boolean Guardar (string fcaptura, string tipo, int anio, string fvalor,string nomkpi, string depto, decimal calif, string usuario){
        
         
            try
            {
                SqlConnection myConnection = new SqlConnection();
                myConnection.ConnectionString = "Data Source=10.10.7.3;Initial Catalog=PROAGH; Uid=sa; Pwd=MDm1210sPx; Persist Security Info=True";
                myConnection.Open();



                SqlCommand comando = new SqlCommand();

                comando.CommandText = "INSERT INTO dbo.kpicuali VALUES( '" + fcaptura + "','" + tipo + "'," + anio + ",'" + fvalor + "','"+ nomkpi + "','" + depto + "','" + calif +"','"+ usuario + "')";
                comando.Connection = myConnection;

                int totalRegistros = comando.ExecuteNonQuery();


                if (totalRegistros > 0)
                {
                    return true;
                }




                myConnection.Close();

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }

            return false;
        }




        [System.Web.Services.WebMethod]
        public static Boolean validarusuario(string user, string pass)
        {

            try
            {
                SqlConnection myConnection = new SqlConnection();
                myConnection.ConnectionString = "Data Source=192.168.1.18;Initial Catalog=Intranet2; Uid=sa; Pwd=MDm1210sPx; Persist Security Info=True";
                myConnection.Open();

                SqlCommand comando = new SqlCommand();

                comando.CommandText = "select COUNT(Nombre) from dbo.tadmon WHERE usuario ='" + user + "' AND contraseña = '" + pass + "'";
                comando.Connection = myConnection;

                int totalRegistros = (int)comando.ExecuteScalar();


                if (totalRegistros > 0)
                {
                    return true;
                }



                myConnection.Close();



            }
            catch (Exception)
            {
                throw;
            }

            return false;
        }

    }

}
