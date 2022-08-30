using Emgu.CV;
using Emgu.CV.Structure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rec_Facial {
    //Classe de extração de características
    public static class Extrair {
        private static string caminho;
        private static Image<Bgr, byte> img;
        private static double c = 0.00;

        //Método para guardar as características em uma lista e retorná-la
        public static List<double> car() {
            List<double> lista = new List<double>();
            for (int i = 1; i< 21; i++) {
                for (int j = 1; j< 4; j++) {
                    caminho = @"C:/Users/Luiz Eduardo/Desktop/Rec_Facial/Rec_Facial/imagens/" + i.ToString() + "-" + j.ToString() + ".jpg";
                    img = new Image<Bgr, byte>(caminho);
                    c = DetectFaceHaar.detectar(img);
                    lista.Add(c);
                }
            }
            return lista;
        }
    }
}
