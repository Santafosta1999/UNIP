using Accord.Vision.Detection;
using Emgu.CV;
using Emgu.CV.Structure;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Rec_Facial {
    public partial class Form1 : Form {
        private double cont = 0.0;
        private int cont1 = 0;
        private int cont2 = 0;
        private double per = 0.00;
        public Form1() {
            InitializeComponent();
        }
        private void btnCarregar_Click(object sender, EventArgs e) {
            try {
                List<double> lista = new List<double>();
                List<double> lista2 = new List<double>();
                lista = Extrair.car();
                lista2 = lista; /* 2 listas com os mesmos valores 
                                para fazer comparação entre os valores */
                foreach (double car in lista) {
                    cont1 = cont1 + 1; //Contador para saber em qual posição da primeira lista o programa se encontra
                    foreach (double car2 in lista2) {
                        cont2 = cont2 + 1; //Contador para saber em qual posição da segunda lista o programa se encontra

                        //Comparação entre valores, com margem de erro de 0.02 pontos
                        if (((car2 / car) > 0.99) && ((car2 / car) < 1.01)) {
                            //Comparação para saber se é falso positivo 
                            if (cont2 - cont1 < 3)  {
                                cont += 1.0;
                            }
                        }
                        else {
                            //Comparação para saber se é falso negativo
                            if (cont1 == cont2) {
                                cont += 0.0;
                            }
                            else {
                                cont += 1.0;
                            }
                        }
                    }
                }
                //Cálculo da porcentagem de acertos
                per = (cont / 3600) * 100;
                MessageBox.Show(per.ToString("F2") + " porcento.");
            }
            catch (Exception ex) {
                MessageBox.Show(ex.Message);
            }
        }
    }
}