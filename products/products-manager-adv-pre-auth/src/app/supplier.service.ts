import { Injectable } from '@angular/core';
import {Supplier} from './model/Supplier';


export class SupplierService {

  private suppliers = [
    new Supplier(1,  'La ferme des 10 vaches', '12345678912', 1000),
    new Supplier(2,  'Le moulin de pepere', '123112341234', 2500),
    new Supplier(3,  'Motorhead', '1234123412349', 7000),
  ];

  constructor() { }

  add(supplier: Supplier): void{
    this.suppliers.push(supplier);
  }

  delete(supplierId: number): void{
    this.suppliers = this.suppliers.filter(s => s.id !== supplierId);
  }

  update(supplier: Supplier): void{
    const supplierArr = this.suppliers.find(s => s.id === supplier.id)[0]
    if (!supplierArr) { return null; }

    const index = this.suppliers.indexOf(supplierArr);
    this.suppliers[index] = supplier;
  }

  findAll(): Supplier[] {
    return this.suppliers;
  }

  findOne(id: number): Supplier {
    return this.suppliers.filter( s => s.id === id)[0];
  }
}
