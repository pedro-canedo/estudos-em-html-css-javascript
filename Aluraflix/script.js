var listaFilmes = [
    "https://2.bp.blogspot.com/-tHtl2N1DMAE/Vyn9drdDmxI/AAAAAAAAXeU/CHa5x9ltKvsoI-PVDNw_51GQRZ_Ld_CpwCLcB/s1600/Star-Wars-IV-poster.jpg",
    "https://play-lh.googleusercontent.com/Y1Nnqaxexu0P4AQZAH4Zxeq4iwhnHE1du9sAY3jH6vITNEElRgDtWLzfLnHp0fOcezgD",
    "https://4.bp.blogspot.com/-SrrJqmhQhTE/WG-SDPlfIuI/AAAAAAAAbbQ/VpPqJUuxKuMCIU2c91JRvlpkoEl7PjcTgCLcB/s1600/Star%2BWars%2BEpisode%2BV%2B-%2BThe%2BEmpire%2BStrikes%2BBack.jpg",
    "https://play-lh.googleusercontent.com/_pedMechdPQJ7ABD5t-M-ElgRTeNXIbjD2yEF2Osvc9s0-j3J6vthfY4G5vIaymm0UQ",
    "https://image.tmdb.org/t/p/original/s2ONgVK8ucLfobZn7VTyaAKH0yA.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg",
    "https://br.web.img3.acsta.net/pictures/18/05/21/17/47/5103671.jpg",
    "https://i.pinimg.com/originals/ff/be/00/ffbe00fd890d76cf2eb7224e58262be3.jpg",
    "https://image.tmdb.org/t/p/w500/mc9hsb5BTTFGmPhHkXxonKP5rFN.jpg",
    "https://image.tmdb.org/t/p/w500/5dGufuaIG5vNcxPm8QPij5MSPeQ.jpg",
    "https://image.tmdb.org/t/p/w500/1cajv97TsZp12DElh9bX9BZkQ9X.jpg"
  ];
  
  var listaTrailers = [
    "https://www.youtube.com/watch?v=VIavHQW9paw",
    "https://www.youtube.com/watch?v=9oISQcXuki0",
    "https://www.youtube.com/watch?v=aCj81910awU",
    "https://www.youtube.com/watch?v=qmyN3WMGqTk",
    "https://www.youtube.com/watch?v=gYbW1F_c9eM",
    "https://www.youtube.com/watch?v=5UnjrG_N8hU",
    "https://www.youtube.com/watch?v=EQpr5HXTvmg",
    "https://www.youtube.com/watch?v=tvyMP-vsJtk",
    "https://www.youtube.com/watch?v=4r0287tUEgk",
    "https://www.youtube.com/watch?v=-di3XYRxyHY",
    "https://www.youtube.com/watch?v=i3X-xQIjqws"
  ];
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write(
      "<a href=" +
        listaTrailers[i] +
        ' target="_blank"><img src=' +
        listaFilmes[i] +
        "></a>"
    );
  }
  