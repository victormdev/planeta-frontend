import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const localData = localStorage.getItem("angularLogin");
    if (localData != null) {
      return true;
    } else {
      router.navigateByUrl("/login");
      return false;
    }
  } else {
    // Se não estiver no ambiente do navegador, redireciona para login ou retorna false
    router.navigateByUrl("/login");
    return false;
  }
};
