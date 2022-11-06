import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CurrencyComponent } from './home/currency.component';
import {TransactionExchangeComponent} from './transaction-exchange/transaction-exchange.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {ExchangeRateAllComponent} from './exchange-rate-all/exchange-rate-all.component';

const routes: Routes = [
  { path: '', redirectTo: 'transaction', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'transaction', component: TransactionExchangeComponent },
  { path: 'transactionAll', component: TransactionListComponent },
  { path: 'exchangeRateAll', component: ExchangeRateAllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
