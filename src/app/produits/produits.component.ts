import { Category } from './../category';
import { MarketServiceService } from './../market-service.service';
import { Produit } from './../produit';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  @ViewChild('closebutton', { static: false }) closebutton;
  @ViewChild('closebutton2', { static: false }) closebutton2;

  produits: Produit[];
  categories: Category[];
  produit: Produit = new Produit();

  ProduitForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  });

  UpdateProduitForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  });

  constructor(private Service: MarketServiceService) { }

  findAllProduits(){
    this.Service.findAllProduits().subscribe(data => {
      this.produits = data;
      console.log(this.produits);
    });
  }
  findAllCategories(){
    this.Service.findAllCategories().subscribe(data =>{
      this.categories = data;
      console.log(this.categories);
    })
  }

  ngOnInit() {
    this.findAllProduits()
    this.findAllCategories();
  }

  deleteProduit(produit: Produit): void{
    this.Service.deleteProduit(produit).subscribe( data => {
        this.produits = this.produits.filter(u => u !== produit)
      });
  }

  AddProduit(): void{
    this.Service.AddProduit(this.ProduitForm.value).subscribe(data =>{
      this.closebutton.nativeElement.click();
      this.findAllProduits();
    });
  }

  upDateProduitById(id){
    this.Service.getProduitById(id).subscribe(data =>{
      this.UpdateProduitForm.patchValue(data);
      this.closebutton2.nativeElement.click();
    });
  }
  upDateProduit(){
    this.Service.AddProduit(this.UpdateProduitForm.value).subscribe(data =>{
      this.closebutton2.nativeElement.click();
      this.findAllProduits();
    });
  }

}
