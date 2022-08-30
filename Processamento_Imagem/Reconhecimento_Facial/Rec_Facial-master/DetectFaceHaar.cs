using Emgu.CV;
using Emgu.CV.Structure;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rec_Facial {
    //Classe de detecção de características
    public static class DetectFaceHaar {
        private static Image<Gray, byte> imgGray;
        private static CascadeClassifier olho;
        private static CascadeClassifier rosto;
        private static CascadeClassifier nariz;
        private static double rX, rY, oX, oY, nX, nY, rX2, rY2, oX2, oY2, nX2, nY2, eu;

        /* Método para utilizar filtros na imagem e detectar
        pontos da face, retornando um valor double */
        public static double detectar(Image<Bgr, byte> img) {
            imgGray = img.Convert<Gray, byte>();
            imgGray._GammaCorrect(2.0); //Filtro de correção de gama(brilho)
            imgGray._Erode(2); /* Filtro de erosão, provoca efeitos de erosão das
                                partes claras da imagem (altos níveis de cinza),
                                gerando imagens mais escuras */
            imgGray._EqualizeHist(); //Equalização do histograma
            imgGray._Dilate(1); /* Filtro de dilatação, provoca efeitos de dilatação das
                                partes escuras da imagem (baixos níveis de cinza),
                                gerando imagens mais claras. */
            
            //Criação de classificadores, com a utilização de arquivos .xml para tal
            olho = new CascadeClassifier(@"C:/Users/Luiz Eduardo/Desktop/Rec_Facial/Rec_Facial/haarcascades/eye.xml");
            rosto = new CascadeClassifier(@"C:/Users/Luiz Eduardo/Desktop/Rec_Facial/Rec_Facial/haarcascades/face2.xml");
            nariz = new CascadeClassifier(@"C:/Users/Luiz Eduardo/Desktop/Rec_Facial/Rec_Facial/haarcascades/nose1.xml");

            //Detecção de face, quadrando-a com um retângulo
            Rectangle[] rectRosto = rosto.DetectMultiScale(imgGray, 1.1, 3, new Size(250, 250), new Size(350, 350));
            foreach (var faces in rectRosto) {
                img.Draw(faces, new Bgr(0, 0, 255), 1);
                //Adquirindo os pontos dos cantos direito e esquerdo da área de detecção
                rX = faces.X;
                rY = faces.Y;
                rX2 = rX + faces.Width;
                rY2 = rY + faces.Width;
            }

            //Detecção de olho, quadrando-o com um retângulo
            Rectangle[] rectOlho = olho.DetectMultiScale(imgGray, 1.5, 4, new Size(30, 30), new Size(50, 50));
            foreach (var olhos in rectOlho) {
                img.Draw(olhos, new Bgr(0, 0, 255), 1);
                //Adquirindo os pontos dos cantos direito e esquerdo da área de detecção
                oX = olhos.X;
                oY = olhos.Y;
                oX2 = oX + olhos.Width;
                oY2 = oY + olhos.Width;
            }

            //Detecção de nariz, quadrando-o com um retângulo
            Rectangle[] rectNariz = nariz.DetectMultiScale(imgGray, 1.5, 4, new Size(55, 55), new Size(70, 70));
            foreach (var narizes in rectNariz) {
                img.Draw(narizes, new Bgr(0, 0, 255), 1);
                //Adquirindo os pontos dos cantos direito e esquerdo da área de detecção
                nX = narizes.X;
                nY = narizes.Y;
                nX2 = nX + narizes.Width;
                nY2 = nY + narizes.Width;
            }
            /* Cálculo das euclidianas (rosto, olhos e nariz), (rosto e olhos),
            (rosto e nariz), (nariz e olhos) */
            eu = Math.Sqrt((Math.Pow((rX - oX), 2)) + (Math.Pow((rY - oY), 2))) + Math.Sqrt((Math.Pow((oX - nX), 2)) + (Math.Pow((oY - nY), 2))) + Math.Sqrt((Math.Pow((rX - nX), 2)) + (Math.Pow((rY - nY), 2))) + Math.Sqrt((Math.Pow((rX2 - oX2 - nX2), 2)) + (Math.Pow((rY2 - oY2 - nY2), 2))) + Math.Sqrt((Math.Pow((rX - oX - nX), 2)) + (Math.Pow((rY - oY - nY), 2)));
            return eu;          
        }
    }
}
