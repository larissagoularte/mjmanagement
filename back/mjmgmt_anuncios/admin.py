from django.contrib import admin
from django.utils.html import format_html
from .models import Anuncio, ImagensAnuncio

class ImagensAnuncioInline(admin.TabularInline):
    model = ImagensAnuncio
    extra = 1
    fields = ['image_thumbnail', 'images']
    readonly_fields = ['image_thumbnail']

    def image_thumbnail(self, obj):
      if obj.images:
          return format_html('<img src="{}" style="max-height: 300px; max-width: 300px;" />', obj.images.url)
      else:
          return 'Sem imagem'

    image_thumbnail.short_description = 'Thumbnail'

@admin.register(Anuncio)
class AnuncioAdmin(admin.ModelAdmin):
    inlines = [ImagensAnuncioInline]

  