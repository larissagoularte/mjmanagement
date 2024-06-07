from django.contrib import admin
from .models import UserData
from django.contrib.auth.admin import UserAdmin

class CustomUserAdmin(UserAdmin):
    list_display = ['email', 'first_name', 'is_active']
    ordering = ['-date_joined']

    def approve_users(self, request, queryset):
        queryset.update(is_active=True)
        self.message_user(request, f"Approved {queryset.count()} user(s)")

    actions = [approve_users]

admin.site.register(UserData, CustomUserAdmin)