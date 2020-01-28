import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})

export class MarketServiceService {

  private ProduitUrl : string;
  private DeleteProduitUrl : string;
  private AddProduitUrl: string;
  private CategoryUrl :string;

  constructor(private http: HttpClient) {
    this.DeleteProduitUrl= 'http://localhost:8015/deleteProduit';
    this.ProduitUrl= 'http://localhost:8015/showProduit';
    this.AddProduitUrl='http://localhost:8015/produit';
    this.CategoryUrl= 'http://localhost:8015/ShowCategory';
  }

   public findAllProduits(): Observable<Produit[]>{
     return this.http.get<Produit[]>(this.ProduitUrl);
   }
   
   public getProduitById(id): Observable<Produit>{
    return this.http.get<Produit>(this.ProduitUrl + "/" + id);
   }

   public findAllCategories(): Observable<Category[]>{
     return this.http.get<Category[]>(this.CategoryUrl);
   }

   public AddProduit(produit: Produit) {
     return this.http.post<Produit>(this.AddProduitUrl, produit);
   }

   deleteProduit(produit){
    return this.http.delete(
      this.DeleteProduitUrl + "/" + produit.id);
  }

}
