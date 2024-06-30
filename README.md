# <span style="font-size: 1.5em; font-weight: bold;">Moje portfolio w React</span> :rocket:

## <span style="font-weight: bold;">Opis ogolny</span> :page_facing_up:
Strona internetowa przedstawiająca moje umiejetnosci oraz zainteresowania jako interaktywne CV. Głównym celem jest stworzenie inteaktywnej, responsywnej oraz ciekawej strony, która w czytelny sposob zaprezentuje moje umiejętnośći techniczne, zawodowe. Strona projektowana z myślą o użytkownikach desktopowych jak i mobilnych.

## <span style="font-weight: bold;">Technologie</span> :hammer_and_wrench:

### <span style="font-weight: bold;">React</span> :atom:
React to popularna biblioteka JavaScript. W projekcie wykorzystano komponenty funkcyjne oraz hooki (`useState` i `useEffect`) - usprawnia zarządzanie aplikacją. React umożliwia tworzenie dynamicznych i interaktywnych interfejsów użytkownika poprzez komponenty, które mogą być wielokrotnie używane.

### <span style="font-weight: bold;">Font Awesome</span> :globe_with_meridians:
Zestaw ikon używanych do wyswietlania różnych symboli i grafik. Dodano za pomocą pakietu `@fortawesome/fontawesome-free`.

### <span style="font-weight: bold;">CSS</span> :art:
Każdy komponent ma swój plik CSS co pomaga w przyszłej edycji i dostosywaniu.

## <span style="font-weight: bold;">Struktura projektu</span> :file_folder:

<details>
<summary>Kliknij, aby zobaczyć szczegóły</summary>
<p>
<pre>
moje_portfolio_react/
├── public/
│   ├── index.html
│   ├── ikony/
│   │   ├── github.png
│   │   ├── linkedin.png
│   │   ├── instagram.png
│   │   ├── facebook.png
│   │   ├── email.png
│   ├── tlo.jpg
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Interests.js
│   │   ├── Interests.css
│   │   ├── Menu.js
│   │   ├── Menu.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── SocialMedia.js
│   │   ├── SocialMedia.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
├──package-lock.json
├── package.json
├── README.md
</pre>
</p>
</details>

## <span style="font-weight: bold;">Problemy i rozwiązania</span> :bug:

### <span style="font-weight: bold;">Stylizacja komponentów</span> :art:
**Problem**: Stylizacja komponentów i unikanie konfliktów styli.  
**Rozwiązanie**: Każdy komponent ma swój plik CSS, co izoluje style i zapobiega ich konfliktom.

### <span style="font-weight: bold;">Problem z Podświetleniem Tekstu</span> :flashlight:
**Problem**: Funkcjonalność podświetlenia tekstu nie działała poprawnie.  
**Rozwiązanie**:
- Upewniłem się, że style CSS dla podświetlenia tekstu są poprawnie zastosowane.
- Przerobiono zachowaniem podświetlania za pomocą obsługi zdarzeń JavaScript.

### <span style="font-weight: bold;">Problem z Responsywnością</span> :iphone:
**Problem**: Strona nie skalowała się prawidłowo w różnych rozmiarach okna.  
**Rozwiązanie**:
- Wprowadzono zapytania medialne (media queries) w CSS, aby dostosować projekt do rozmiaru okna.
- To zapewniło spójny układ na różnych urządzeniach.

## <span style="font-weight: bold;">Możliwości w przyszłości</span> :crystal_ball:

### <span style="font-weight: bold;">Optymalizacja wydajności</span> :zap:
**Problem**: Spadek wydajności aplikacji przy renderowaniu dużej liczby komponentów.  
**Możliwe rozwiązanie**: Użycie hooka `useMemo` do memorizacji kosztownych obliczeń oraz `React.memo` do zapobiegania niepotrzebnym renderowaniom komponentów funkcyjnych, które nie zmieniają swoich propsów. Dzięki tym narzędziom można znacznie poprawić wydajność aplikacji.

### <span style="font-weight: bold;">Zarządzanie stanem komponentów</span> :wrench:
**Problem**: Trudności w zarządzaniu stanem między różnymi komponentami.  
**Możliwe rozwiązanie**: Użycie hooka `useState` do lokalnego zarządzania stanem oraz `useContext` do zarządzania stanem globalnym w aplikacji. Dzięki temu można efektywnie przekazywać dane i metody między komponentami bez potrzeby przekazywania ich przez propsy na każdym poziomie hierarchii komponentów.

## <span style="font-weight: bold;">Podsumowanie</span> :memo:
Projekt portfolio w React jest przykładem wykorzystania nowoczesnych narzędzi i technologii webowych. Dzięki React oraz CSS możliwe jest stworzenie wydajnej i łatwej do utrzymania aplikacji.

## <span style="font-weight: bold;">Reflekcja</span> :bulb:
**Urzytecznosc React`a** jest na tyle duża że swoją prace inżynieryjską będę pisał w tym frameworku. Usprawni mi to cała prace oraz zaoszczedzi dużo czasu.