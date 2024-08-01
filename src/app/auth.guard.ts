import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const localData = localStorage.getItem("angularLogin");
    if (localData != null) {
      return true; // Usuário está logado, permanece na página atual
    } else {
      router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false; // Redireciona para a tela de login
    }
  } else {
    // Se não estiver no ambiente do navegador, redireciona para login ou retorna false
    router.navigate(['/login']);
    return false;
  }
};
